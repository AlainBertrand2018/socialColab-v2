import { Card, CardContent } from "@/components/ui/card"

export function MainContent({ children }: { children: React.ReactNode }) {
    return (
        <Card>
            <CardContent className="p-6">
                {children}
            </CardContent>
        </Card>
    )
}
