import { CheckCircle2 } from 'lucide-react';
import { requestPassportFields } from '@/content/site';

export function RequestPassport() {
  return (
    <div className="request-passport" role="group" aria-label="Example request passport">
      <div className="passport-spine">
        <span>Vecell</span>
        <strong>Request passport</strong>
        <small>Example lineage</small>
      </div>
      <div className="passport-fields">
        {requestPassportFields.map((field) => {
          const Icon = field.icon;

          return (
            <article key={field.label} className="passport-field">
              <div className="passport-field-head">
                <Icon aria-hidden="true" size={20} />
                <span>{field.label}</span>
              </div>
              <strong>{field.value}</strong>
              <p>{field.detail}</p>
              <small data-tone={field.tone}>
                <CheckCircle2 aria-hidden="true" size={14} />
                {field.status}
              </small>
            </article>
          );
        })}
      </div>
    </div>
  );
}
