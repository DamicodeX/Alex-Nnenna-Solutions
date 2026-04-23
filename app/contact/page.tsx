"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { contactContent, siteConfig } from "@/lib/data";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
          <h1 className="font-(family-name:--font-heading) text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            {contactContent.heading}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {contactContent.subheading}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <p className="text-xs tracking-widest uppercase font-semibold text-muted-foreground mb-4">
                  Contact Information
                </p>
                <div className="space-y-4">
                  <a href={`mailto:${contactContent.email}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                    <div className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-primary/40 transition-colors">
                      <Mail className="size-4" />
                    </div>
                    {contactContent.email}
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-10 h-10 flex items-center justify-center border border-border">
                      <MapPin className="size-4" />
                    </div>
                    {contactContent.location}
                  </div>
                  <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                    <div className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-primary/40 transition-colors">
                      <LinkedinIcon className="size-4" />
                    </div>
                    LinkedIn Profile
                    <ArrowUpRight className="size-3" />
                  </a>
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-xs tracking-widest uppercase font-semibold text-muted-foreground mb-3">
                  Areas of Engagement
                </p>
                <ul className="space-y-2">
                  {["Strategic Consulting", "Speaking Engagements", "Research Collaborations", "Corporate Mediation", "Institutional Advisory"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="block w-1 h-1 bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we will respond within 48 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 mx-auto flex items-center justify-center border border-primary text-primary">
                        <Send className="size-6" />
                      </div>
                      <h3 className="font-(family-name:--font-heading) text-xl font-bold">
                        Message Sent
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Thank you for reaching out. Dr. Attah&apos;s team will respond within 48 hours.
                      </p>
                      <Button variant="outline" onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", organization: "", subject: "", message: "" }); }}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-xs tracking-widest uppercase font-semibold text-muted-foreground">
                            Full Name *
                          </label>
                          <Input id="name" required placeholder="Dr. Jane Doe"
                            value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-xs tracking-widest uppercase font-semibold text-muted-foreground">
                            Email *
                          </label>
                          <Input id="email" type="email" required placeholder="jane@institution.org"
                            value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="organization" className="text-xs tracking-widest uppercase font-semibold text-muted-foreground">
                            Organization
                          </label>
                          <Input id="organization" placeholder="University / Company"
                            value={formState.organization} onChange={(e) => setFormState({ ...formState, organization: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-xs tracking-widest uppercase font-semibold text-muted-foreground">
                            Subject *
                          </label>
                          <Input id="subject" required placeholder="Consulting Inquiry"
                            value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-xs tracking-widest uppercase font-semibold text-muted-foreground">
                          Message *
                        </label>
                        <textarea id="message" required rows={5} placeholder="Describe your consulting needs..."
                          className="flex w-full border border-input bg-transparent px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} />
                      </div>
                      <Button type="submit" size="lg" className="w-full sm:w-auto">
                        Send Message
                        <Send data-icon="inline-end" className="size-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
