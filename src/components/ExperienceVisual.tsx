import Image from 'next/image';
import { CalendarClock, MessageSquareText, ShieldCheck } from 'lucide-react';

export function ExperienceVisual() {
  return (
    <div className="experience-visual" role="group" aria-label="Patient and team experience illustration">
      <Image
        src="/illustrations/vecell-patient-team-flow.png"
        alt="Abstract web, mobile, and phone entry channels flowing into one governed care request."
        width={1200}
        height={820}
        loading="eager"
        unoptimized
        sizes="(max-width: 760px) 354px, (max-width: 1180px) 90vw, 46vw"
      />
      <div className="experience-signals" role="list" aria-label="Patient and team outcomes">
        <span role="listitem">
          <MessageSquareText aria-hidden="true" size={18} />
          Clear updates
        </span>
        <span role="listitem">
          <CalendarClock aria-hidden="true" size={18} />
          Fewer clicks
        </span>
        <span role="listitem">
          <ShieldCheck aria-hidden="true" size={18} />
          Shared proof
        </span>
      </div>
    </div>
  );
}
