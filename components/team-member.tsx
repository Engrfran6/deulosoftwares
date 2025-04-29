import {Facebook, Linkedin, Twitter} from 'lucide-react';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}

export function TeamMember({name, position, image}: TeamMemberProps) {
  return (
    <div className="flex items-center border  gap-4 overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 px-3">
      <div className="relative size-20">
        <Image
          src={image || '/placeholder.svg'}
          alt={name}
          fill
          className="object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
          priority
        />
      </div>

      <div className="">
        <div className="pt-4 mb-6">
          <h3 className="text-sm font-semibold text-foreground">{name}</h3>
          <p className="text-xs text-muted-foreground">{position}</p>
        </div>
        <div className="flex  gap-4 pt-0 pb-4">
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
        </div>
      </div>
    </div>
  );
}
