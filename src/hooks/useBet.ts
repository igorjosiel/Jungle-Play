import { useAppDispatch } from "@/store/hooks";
import { subtractBalance, addBalance } from "@/store/slices/walletSlice";
import { addTransaction } from "@/store/slices/transactionsSlice";

const BET_AMOUNT = 5;

export function useBet() {
  const dispatch = useAppDispatch();

  function placeBet(game: string) {
    const won = Math.random() > 0.5;
    const winAmount = won ? 25 : 0;

    dispatch(subtractBalance(BET_AMOUNT));

    if (won) {
      dispatch(addBalance(winAmount));
    }

    dispatch(
      addTransaction({
        id: crypto.randomUUID(),
        username: "Igor",
        game,
        betAmount: BET_AMOUNT,
        winAmount,
        timestamp: new Date().toISOString(),
        status: won ? "win" : "loss",
      }),
    );

    return {
      won,
      winAmount,
    };
  }

  return {
    placeBet,
  };
}
