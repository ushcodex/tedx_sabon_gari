import { Button } from "@/components/ui/button"
import { Check, Camera } from "lucide-react"

interface PaymentSuccessViewProps {
  amount: number
  ticket: string
  reference: string
  closeDialog?: () => void
}

export function PaymentSuccessView({ amount, ticket, reference, closeDialog }: PaymentSuccessViewProps) {
  return (
    <div className="text-center py-2">
      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Check className="w-8 h-8 text-green-500" />
      </div>
      <p className="text-muted-foreground mb-4">Thank you for your purchase. Your ticket has been reserved.</p>

      {/* Screenshot Reminder */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 mb-4 flex items-center gap-3">
        <Camera className="w-5 h-5 text-amber-500 flex-shrink-0" />
        <p className="text-sm text-amber-600 dark:text-amber-400 text-left font-medium">
          📸 Please take a screenshot of this ticket for your records!
        </p>
      </div>

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

