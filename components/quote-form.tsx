'use client';

import type React from 'react';

import {Button} from '@/components/ui/button';
import {Checkbox} from '@/components/ui/checkbox';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {Textarea} from '@/components/ui/textarea';
import {cn} from '@/lib/utils';
import {useState} from 'react';
import {toast} from 'sonner';

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast(
        `Quote request submitted!, We'll get back to you with a detailed quote within 2 business days.`
      );

      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Contact Information</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input id="firstName" name="firstName" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input id="lastName" name="lastName" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input id="company" name="company" />
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Project Details</h3>
        <div className="space-y-2">
          <Label htmlFor="projectType">Project Type *</Label>
          <Select name="projectType" required>
            <SelectTrigger>
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web-development">Web Development</SelectItem>
              <SelectItem value="mobile-app">Mobile App Development</SelectItem>
              <SelectItem value="custom-software">Custom Software</SelectItem>
              <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
              <SelectItem value="api-development">API Development</SelectItem>
              <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectDescription">Project Description *</Label>
          <Textarea
            id="projectDescription"
            name="projectDescription"
            placeholder="Please describe your project, including goals, features, and any specific requirements."
            rows={5}
            required
          />
        </div>

        <div className="space-y-2">
          <Label>Budget Range *</Label>
          <RadioGroup defaultValue="5k-10k" name="budgetRange" required>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="under-5k" id="under-5k" />
              <Label htmlFor="under-5k">Under $5,000</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="5k-10k" id="5k-10k" />
              <Label htmlFor="5k-10k">$5,000 - $10,000</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="10k-25k" id="10k-25k" />
              <Label htmlFor="10k-25k">$10,000 - $25,000</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="25k-50k" id="25k-50k" />
              <Label htmlFor="25k-50k">$25,000 - $50,000</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="50k-plus" id="50k-plus" />
              <Label htmlFor="50k-plus">$50,000+</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timeline">Timeline</Label>
          <Select name="timeline">
            <SelectTrigger
              className={cn(
                'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
              )}>
              <SelectValue placeholder="Select expected timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asap">As soon as possible</SelectItem>
              <SelectItem value="1-month">Within 1 month</SelectItem>
              <SelectItem value="1-3-months">1-3 months</SelectItem>
              <SelectItem value="3-6-months">3-6 months</SelectItem>
              <SelectItem value="6-plus-months">6+ months</SelectItem>
              <SelectItem value="not-sure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Services Needed (Select all that apply)</Label>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="design" name="services" value="design" />
              <Label htmlFor="design">UI/UX Design</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="frontend" name="services" value="frontend" />
              <Label htmlFor="frontend">Frontend Development</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="backend" name="services" value="backend" />
              <Label htmlFor="backend">Backend Development</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="database" name="services" value="database" />
              <Label htmlFor="database">Database Design</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="api" name="services" value="api" />
              <Label htmlFor="api">API Development</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="testing" name="services" value="testing" />
              <Label htmlFor="testing">Testing & QA</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="deployment" name="services" value="deployment" />
              <Label htmlFor="deployment">Deployment</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="maintenance" name="services" value="maintenance" />
              <Label htmlFor="maintenance">Maintenance & Support</Label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="additionalInfo">Additional Information</Label>
          <Textarea
            id="additionalInfo"
            name="additionalInfo"
            placeholder="Any other details that would help us understand your project better."
            rows={3}
          />
        </div>
      </div>

      {/* How did you hear about us */}
      <div className="space-y-2">
        <Label htmlFor="referralSource">How did you hear about us?</Label>
        <Select name="referralSource">
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="search">Search Engine (Google, Bing, etc.)</SelectItem>
            <SelectItem value="social">Social Media</SelectItem>
            <SelectItem value="referral">Referral from a friend/colleague</SelectItem>
            <SelectItem value="review">Review Site</SelectItem>
            <SelectItem value="blog">Blog or Article</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Terms and Privacy */}
      <div className="flex items-start space-x-2">
        <Checkbox id="terms" name="terms" required />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            I agree to the{' '}
            <a
              href="/terms-of-service"
              className="text-primary hover:underline"
              target="_blank"
              rel="noreferrer">
              terms of service
            </a>{' '}
            and{' '}
            <a
              href="/privacy-policy"
              className="text-primary hover:underline"
              target="_blank"
              rel="noreferrer">
              privacy policy
            </a>
            .
          </Label>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Request Quote'}
      </Button>
    </form>
  );
}
