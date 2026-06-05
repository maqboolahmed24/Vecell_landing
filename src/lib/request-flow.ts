import {
  assuranceCompletenessChecks,
  assuranceGraphNodes,
  assurancePackItems,
  auditTrailEvents,
  channels,
  endpointRoutes,
  flowSteps,
  integrationChain,
  operatingMetrics,
  requestPassportFields,
  roleSurfaceDetails,
  surfaces
} from '@/content/site';

export function requestFlowPayload() {
  return {
    generatedAt: new Date().toISOString(),
    model: 'one governed request lineage',
    channels: channels.map(({ title, copy }) => ({ title, copy })),
    lifecycle: flowSteps.map(({ title, copy }) => ({ title, copy })),
    requestPassport: requestPassportFields.map(({ label, value, detail, status }) => ({ label, value, detail, status })),
    endpoints: endpointRoutes.map(({ title, copy }) => ({ title, copy })),
    surfaces: surfaces.map(({ title, copy }) => ({ title, copy })),
    roleSurfaces: roleSurfaceDetails.map((surface) => ({
      title: surface.title,
      audience: surface.audience,
      summary: surface.summary,
      metric: surface.metric,
      metricLabel: surface.metricLabel,
      status: surface.status,
      worklist: surface.worklist,
      actions: surface.actions,
      proof: surface.proof
    })),
    integrationChain: integrationChain.map(({ title, items }) => ({ title, items })),
    assuranceLedger: {
      graph: assuranceGraphNodes.map(({ label, detail }) => ({ label, detail })),
      auditTrail: auditTrailEvents.map(({ time, title, detail, status }) => ({ time, title, detail, status })),
      pack: assurancePackItems.map(({ title, detail }) => ({ title, detail })),
      completenessChecks: [...assuranceCompletenessChecks]
    },
    operatingMetrics: [...operatingMetrics]
  };
}
