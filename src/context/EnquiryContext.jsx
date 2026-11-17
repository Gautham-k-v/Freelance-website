import { createContext, useContext, useMemo, useState } from "react"

const EnquiryContext = createContext(null)

export function EnquiryProvider({ children }) {
  const [service, setService] = useState("")

  const value = useMemo(
    () => ({
      service,
      setService,
      chooseService(nextService) {
        setService(nextService)
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
      },
    }),
    [service],
  )

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>
}

export function useEnquiry() {
  const context = useContext(EnquiryContext)
  if (!context) {
    throw new Error("useEnquiry must be used within EnquiryProvider")
  }
  return context
}
