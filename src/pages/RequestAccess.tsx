import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check, Send, Network } from "lucide-react";
import { BRAND } from "@/lib/constants";

const RequestAccessPage = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Request Submitted
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Thank you for your interest in {BRAND.name}. Our team will review your request and get back to you shortly.
          </p>
          <Link to="/">
            <Button variant="outline" className="border-white/15 text-foreground hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-md px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <div className="text-center mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4">
              <Network className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground mb-2">
              Request Access
            </h1>
            <p className="text-muted-foreground text-sm">
              Get started with {BRAND.name} for your organization.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Work Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                Company
              </label>
              <Input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Your organization"
                required
                className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
            <Button type="submit" className="w-full bg-white text-black hover:bg-white/90 h-11 rounded-xl">
              Submit Request
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6">
            By submitting, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestAccessPage;
