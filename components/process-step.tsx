import {Card, CardContent, CardHeader} from '@/components/ui/card';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export function ProcessStep({number, title, description}: ProcessStepProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <span className="text-4xl font-bold text-primary/50">{number}</span>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
