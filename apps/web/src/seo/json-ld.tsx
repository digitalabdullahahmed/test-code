type JsonLdProps = {
  data: Record<string, unknown>;
};

function safeJsonStringify(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: safeJsonStringify(data) }}
      type="application/ld+json"
    />
  );
}
