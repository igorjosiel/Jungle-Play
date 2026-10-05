import { useMemo } from "react";
import {
    Activity,
    CircleDollarSign,
    Percent,
    WalletCards,
} from "lucide-react";
import { KpiCard } from "@/components/kpi-card/KpiCard";
import { useAppSelector } from "@/store/hooks";

export function Dashboard() {
    const transactions = useAppSelector(
        (state) => state.transactions.transactions,
    );

    const metrics = useMemo(() => {
        const totalBets = transactions.length;

        const totalWagered = transactions.reduce(
            (total, transaction) => total + transaction.betAmount,
            0,
        );

        const totalWon = transactions.reduce(
            (total, transaction) => total + transaction.winAmount,
            0,
        );

        const ggr = totalWagered - totalWon;

        const activePlayers = new Set(
            transactions.map((transaction) => transaction.username),
        ).size;

        return {
            totalBets,
            totalWagered,
            totalWon,
            ggr,
            activePlayers,
        };
    }, [transactions]);

    return (
        <main className="mx-auto max-w-7xl px-6 py-10">
            <section className="mb-10">
                <p className="mb-2 text-sm font-medium text-emerald-400">
                    OPERATOR DASHBOARD
                </p>

                <h1 className="text-4xl font-bold tracking-tight">
                    Visão geral da operação
                </h1>

                <p className="mt-3 max-w-2xl text-zinc-400">
                    Acompanhe métricas, receita e atividade dos jogadores
                    em tempo real.
                </p>
            </section>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <KpiCard
                    title="GGR Total"
                    value={`R$ ${metrics.ggr.toFixed(2).replace(".", ",")}`}
                    icon={CircleDollarSign}
                    description="Receita bruta do jogo"
                />

                <KpiCard
                    title="Total de Apostas"
                    value={metrics.totalBets.toString()}
                    icon={WalletCards}
                    description="Apostas realizadas"
                />

                <KpiCard
                    title="Jogadores Ativos"
                    value={metrics.activePlayers.toString()}
                    icon={Activity}
                    description="Jogadores com atividade"
                />

                <KpiCard
                    title="Taxa de Conversão"
                    value="0%"
                    icon={Percent}
                    description="Conversão de jogadores"
                />
            </section>
        </main>
    );
}
