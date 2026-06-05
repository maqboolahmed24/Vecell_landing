import { integrationChain } from '@/content/site';

export function IntegrationChain() {
  return (
    <div className="integration-chain" role="list" aria-label="Vecells integration chain">
      {integrationChain.map((group) => {
        const Icon = group.icon;

        return (
          <article key={group.title} className="integration-node" role="listitem">
            <div className="integration-node-title">
              <Icon aria-hidden="true" size={20} />
              <h3>{group.title}</h3>
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}
