import { describe, expect, it } from 'vitest';
import { requestFlowPayload } from '@/lib/request-flow';

describe('requestFlowPayload', () => {
  it('exposes the canonical request lifecycle and surfaces', () => {
    const payload = requestFlowPayload();

    expect(payload.model).toBe('one governed request lineage');
    expect(payload.lifecycle.map((step) => step.title)).toEqual([
      'Capture',
      'Normalise',
      'Safeguard',
      'Triage',
      'Route',
      'Prove'
    ]);
    expect(payload.surfaces).toContainEqual(expect.objectContaining({ title: 'Operations Console' }));
    expect(payload.roleSurfaces.map((surface) => surface.title)).toEqual([
      'Patient Portal',
      'Clinical Workspace',
      'Operations Console',
      'Hub Desk',
      'Pharmacy Console',
      'Support Desk',
      'Governance & Admin'
    ]);
    expect(payload.roleSurfaces).toContainEqual(expect.objectContaining({
      title: 'Pharmacy Console',
      proof: expect.arrayContaining(['Consent proof present'])
    }));
    expect(payload.requestPassport.map((field) => field.label)).toContain('Audit proof');
    expect(payload.integrationChain).toContainEqual(expect.objectContaining({
      title: 'FHIR boundary',
      items: expect.arrayContaining(['FHIR-aligned exchange'])
    }));
    expect(payload.assuranceLedger.graph.map((node) => node.label)).toEqual([
      'Lineage',
      'Identity',
      'Policy',
      'Route',
      'Outcome'
    ]);
    expect(payload.assuranceLedger.auditTrail).toContainEqual(expect.objectContaining({
      title: 'Routed to Pharmacy First',
      status: 'Accepted'
    }));
    expect(payload.assuranceLedger.completenessChecks).toContain('Recovery proof retained');
  });
});
