import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {ArrowRight} from 'lucide-react';
import Link from 'next/link';
import type React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  expanded?: boolean;
}

export function ServiceCard({icon, title, description, link, expanded = false}: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg bg-muted">
      <CardHeader>
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        {!expanded && <CardDescription className="line-clamp-2">{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {expanded && <p className="text-muted-foreground text-sm">{description}</p>}
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild variant="ghost" className="p-0 h-auto font-medium">
          <Link href={link} className="flex items-center text-primary">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
