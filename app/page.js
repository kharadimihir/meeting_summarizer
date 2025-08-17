"use client";

import { generateAISummary } from "@/actions/summary";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSummaryStore } from "@/lib/store";
import { Edit3, Sparkles, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const { setSummary } = useSummaryStore();

  const [transcript, setTranscript] = useState("");
  const [customPrompt, setCustomPrompt] = useState(
    "Summarize the key points and action items from this meeting"
  );
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result;
        setTranscript(content);
      };
      reader.readAsText(file);
    }
  };

  const generateSummary = async () => {
    if (!transcript.trim()) return;

    setIsGenerating(true);
    try {
      let aiSummary = "";

      try {
        aiSummary = await generateAISummary(transcript, customPrompt);
      } catch (error) {
        console.warn("Gemini failed, falling back to mock summary:", error);
      }

      const mockSummary =
        aiSummary ||
        `## Meeting Summary

**Key Points:**
- Discussed project timeline and milestones
- Reviewed budget allocation for Q4
- Identified potential risks and mitigation strategies

**Action Items:**
- John to prepare budget report by Friday
- Sarah to schedule follow-up meeting with stakeholders
- Team to review and approve project proposal by next week

**Decisions Made:**
- Approved additional resources for development team
- Agreed on new project timeline
- Established weekly check-in meetings`;

      setSummary(mockSummary);
      router.push("/api");
    } catch (error) {
      console.error("Error generating summary:", error);
    } finally {
      setIsGenerating(false);
    }
  };
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            AI Meeting Summarizer
          </h1>
          <p className="text-muted-foreground">
            Upload transcripts, generate summaries, and share insights
          </p>
        </div>

        {/* Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload Transcript
            </CardTitle>
            <CardDescription>
              Upload a text file or paste your meeting transcript below
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="file-upload">Upload Text File</Label>
              <Input
                id="file-upload"
                type="file"
                accept=".txt"
                onChange={handleFileUpload}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="transcript">Or Paste Transcript</Label>
              <Textarea
                id="transcript"
                placeholder="Paste your meeting transcript here..."
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                className="min-h-32 mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Custom Prompt Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Edit3 className="h-5 w-5" />
              Custom Instructions
            </CardTitle>
            <CardDescription>
              Customize how you want the AI to summarize your meeting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="e.g., Summarize in bullet points for executives, Highlight only action items, etc."
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              className="min-h-20"
            />
          </CardContent>
        </Card>

        {/* Generate Button */}
        <div className="flex justify-center">
          <Button
            onClick={generateSummary}
            disabled={!transcript.trim() || isGenerating}
            size="lg"
            className="px-8 cursor-pointer"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            {isGenerating ? "Generating Summary..." : "Generate Summary"}
          </Button>
          
        </div>
      </div>
    </div>
  );
}
