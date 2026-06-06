import Image from 'next/image';
import { operatingMetrics } from '@/content/site';

export function OperationsVisual() {
  return (
    <div className="ops-visual" role="group" aria-label="Operations console preview">
      <div className="ops-illustration" aria-hidden="true">
        <Image
          src="/illustrations/vecell-operations-assurance-clean.png"
          alt=""
          width={1517}
          height={1037}
          loading="eager"
          unoptimized
          sizes="(max-width: 760px) 354px, (max-width: 1180px) 90vw, 58vw"
        />
      </div>
      <div className="ops-signal-strip">
        {operatingMetrics.map((metric) => (
          <div key={metric.label} className="metric-tile">
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.detail}</small>
          </div>
        ))}
      </div>
      <div className="ops-proof-grid">
        <p><strong>Workload picture</strong><span>See where demand is building.</span></p>
        <p><strong>Team readiness</strong><span>Keep handoffs and responsibilities clear.</span></p>
        <p><strong>Proof attached</strong><span>Keep each action easy to explain.</span></p>
      </div>
    </div>
  );
}
