import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PaymentSuccessViewProps {
  amount: number
  ticket: string
  reference: string
  closeDialog?: () => void
}

export function PaymentSuccessView({ amount, ticket, reference, closeDialog }: PaymentSuccessViewProps) {
  return (
    <div className="text-center py-6">
      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Check className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-2">Payment Successful!</h3>
      <p className="text-muted-foreground mb-6">Thank you for your purchase. Your ticket has been reserved.</p>

      <div className="bg-secondary/50 rounded-lg p-4 mb-6 text-left">
        <div className="flex justify-between mb-2">
          <span className="text-muted-foreground text-sm">Amount Paid:</span>
          <span className="font-semibold text-foreground">₦{amount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-muted-foreground text-sm">Ticket Type:</span>
          <span className="font-semibold text-foreground">{ticket}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground text-sm">Reference:</span>
          <span className="font-mono text-xs text-foreground bg-background px-2 py-1 rounded border border-border">
            {reference}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm text-muted-foreground mb-2">Join our community for updates:</p>
        <a href="https://chat.whatsapp.com/ED6fJBckypV3rcvag1FPoT?mode=hqrt2" target="_blank" rel="noopener noreferrer">
          <Button className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold">
            Join WhatsApp Group
          </Button>
        </a>
        {closeDialog && (
          <Button variant="outline" onClick={closeDialog} className="w-full">
            Close
          </Button>
        )}
      </div>
    </div>
  )
}
