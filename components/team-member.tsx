import {Card, CardContent, CardFooter} from '@/components/ui/card';
import {Facebook, Linkedin, Twitter} from 'lucide-react';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}

export function TeamMember({name, position, image}: TeamMemberProps) {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-0">
      <div className="relative h-64 w-full">
        <Image src={image || '/placeholder.svg'} alt={name} fill className="object-cover" />
      </div>
      <CardContent className="pt-4 text-center">
        <h3 className="text-xl font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{position}</p>
      </CardContent>
      <CardFooter className="flex justify-center gap-4 pt-0 pb-4">
        <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
          <Facebook className="h-5 w-5" />
          <span className="sr-only">Facebook</span>
        </a>
        <a href="#" className="text-muted-foreground hover:text-sky-500 transition-colors">
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </a>
        <a href="#" className="text-muted-foreground hover:text-blue-700 transition-colors">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </CardFooter>
    </Card>
  );
}
