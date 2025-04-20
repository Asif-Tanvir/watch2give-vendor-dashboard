"use client"

import { Coins, RefreshCw, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TokenActionsProps {
  selectedAction: string | null
  onActionSelect: (action: string) => void
}

export default function TokenActions({ selectedAction, onActionSelect }: TokenActionsProps) {
  const actions = [
    {
      id: "Redeem",
      icon: Coins,
      label: "Redeem",
      description: "Exchange tokens for value",
      color: "bg-[#FFBB54] hover:bg-[#F5A742]",
      textColor: "text-[#2D2A5E]",
    },
    {
      id: "Stake",
      icon: RefreshCw,
      label: "Stake",
      description: "Lock tokens for rewards",
      color: "bg-[#FF6B5B] hover:bg-[#F55A4A]",
      textColor: "text-white",
    },
    {
      id: "Restock",
      icon: Package,
      label: "Restock",
      description: "Record new inventory",
      color: "bg-[#26A69A] hover:bg-[#1E8E82]",
      textColor: "text-white",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {actions.map((action) => (
        <Button
          key={action.id}
          variant="outline"
          className={`h-auto min-h-[140px] flex-col py-6 px-4 border-0 ${action.color} ${action.textColor} overflow-hidden rounded-xl shadow-md transition-all duration-200 ${
            selectedAction === action.id ? "ring-2 ring-white" : ""
          }`}
          onClick={() => onActionSelect(action.id)}
        >
          <action.icon className="h-6 w-6 mb-2" />
          <div className="font-medium text-base">{action.label}</div>
          <div className="text-xs mt-1 mb-1 font-normal whitespace-normal w-full px-2 break-words">
            {action.description}
          </div>
        </Button>
      ))}
    </div>
  )
}
