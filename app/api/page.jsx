"use client";
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
import { Mail, Sparkles, Upload, Edit3 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const MeetingSummarizer = () => {
  const { summary, setSummary } = useSummaryStore();
  const [emailRecipients, setEmailRecipients] = useState("");
  const [isSending, setIsSending] = useState(false);

  const router = useRouter();

  const handleGoHome = () =>{
    router.push("/");
  }

  useEffect(() => {
    const savedSummary = localStorage.getItem("meetingSummary");
    if (savedSummary) {
      setSummary(savedSummary);
    }
  }, [setSummary]);

  useEffect(() => {
    if (summary) {
      localStorage.setItem("meetingSummary", summary);
    }
  }, [summary]);

  const sendEmail = async () => {
    if (!summary.trim() || !emailRecipients.trim()) return;

    setIsSending(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          to: emailRecipients,
          subject: "Metting Summary",
          text: summary,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Email sent successfully!");
        setEmailRecipients("");
      } else {
        toast.error("Failed to send: " + data.error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Summary Section */}
        {summary && (
          <Card>
            <CardHeader>
              <CardTitle>Generated Summary</CardTitle>
              <CardDescription>
                Edit the summary below if needed, then share via email
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="min-h-64 font-mono text-sm"
              />

              {/* Email Sharing */}
              <div className="space-y-3 pt-4 border-t">
                <Label htmlFor="email-recipients">Share via Email</Label>
                <Input
                  id="email-recipients"
                  type="email"
                  placeholder="Enter email addresses (comma separated)"
                  value={emailRecipients}
                  onChange={(e) => setEmailRecipients(e.target.value)}
                />
                <Button
                  onClick={sendEmail}
                  disabled={
                    !summary.trim() || !emailRecipients.trim() || isSending
                  }
                  className="w-full cursor-pointer"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  {isSending ? "Sending..." : "Send Summary"}
                </Button>
              </div>
              <div>
                <Button  className="w-full cursor-pointer" onClick={handleGoHome}>Go Home</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MeetingSummarizer;
