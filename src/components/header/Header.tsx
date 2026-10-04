import { useAppSelector } from "@/store/hooks";

export function Header() {
  const balance = useAppSelector(
    (state) => state.wallet.balance
  );

  return (
    <header>
      <h1>JunglePulse</h1>

      <div>
        <span>Saldo</span>
        <strong>
          R$ {balance.toFixed(2).replace(".", ",")}
        </strong>
      </div>
    </header>
  );
}
