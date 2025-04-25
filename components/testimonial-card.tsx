import {Card, CardContent, CardFooter} from '@/components/ui/card';
import {QuoteIcon} from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
}

export function TestimonialCard({quote, author, position}: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6">
        <QuoteIcon className="h-8 w-8 text-primary/20 mb-4" />
        <p className="text-muted-foreground italic">{quote}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{position}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
