export default function Logo({ className = "h-12 w-auto", loading = "eager" }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.png`}
      alt="NexLance, freelance web development"
      className={className}
      width="339"
      height="157"
      loading={loading}
      decoding="async"
    />
  )
}
