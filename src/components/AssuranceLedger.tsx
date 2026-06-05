import { CheckCircle2, Download, FileCheck2, Fingerprint, ShieldCheck } from 'lucide-react';
import {
  assuranceCompletenessChecks,
  assuranceGraphNodes,
  assurancePackItems,
  auditTrailEvents
} from '@/content/site';

export function AssuranceLedger() {
  return (
    <div className="assurance-ledger" role="group" aria-label="Assurance ledger preview">
      <div className="ledger-graph-panel">
        <div className="ledger-panel-heading">
          <ShieldCheck aria-hidden="true" size={20} />
          <div>
            <h3>Evidence graph</h3>
            <p>One proof basis for safety, routing, outcome, and assurance.</p>
          </div>
        </div>
        <div className="ledger-graph" aria-hidden="true">
          <div className="ledger-graph-core">
            <Fingerprint size={24} />
            <span>Assurance spine</span>
          </div>
          {assuranceGraphNodes.map((node) => (
            <div key={node.label} className="ledger-node" data-tone={node.tone}>
              <strong>{node.label}</strong>
              <span>{node.detail}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="ledger-trail-panel">
        <div className="ledger-panel-heading">
          <Fingerprint aria-hidden="true" size={20} />
          <div>
            <h3>Audit trail</h3>
            <p>Each transition settles with time, scope, and proof.</p>
          </div>
        </div>
        <ol className="ledger-trail">
          {auditTrailEvents.map((event) => (
            <li key={`${event.time}-${event.title}`}>
              <time>{event.time}</time>
              <div>
                <strong>{event.title}</strong>
                <p>{event.detail}</p>
              </div>
              <span>{event.status}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="ledger-pack-panel">
        <div className="ledger-panel-heading">
          <FileCheck2 aria-hidden="true" size={20} />
          <div>
            <h3>Assurance pack</h3>
            <p>Export-ready evidence without rebuilding the story by hand.</p>
          </div>
        </div>
        <div className="ledger-pack-status">
          <Download aria-hidden="true" size={18} />
          Evidence pack ready
        </div>
        <ul className="ledger-pack-list">
          {assurancePackItems.map((item) => (
            <li key={item.title}>
              <CheckCircle2 aria-hidden="true" size={16} />
              <div>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="ledger-check-panel">
        {assuranceCompletenessChecks.map((check) => (
          <span key={check}>
            <CheckCircle2 aria-hidden="true" size={15} />
            {check}
          </span>
        ))}
      </div>
    </div>
  );
}
