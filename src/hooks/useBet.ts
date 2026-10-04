import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { subtractBalance, addBalance } from "@/store/slices/walletSlice";
import { addTransaction } from "@/store/slices/transactionsSlice";

const BET_AMOUNT = 5;

export function useBet() {
  const dispatch = useAppDispatch();
  const balance = useAppSelector((state) => state.wallet.balance);

  function placeBet(game: string) {
    if (balance < BET_AMOUNT) {
      return {
        won: false,
        winAmount: 0,
        insufficientBalance: true,
      };
    }

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
      insufficientBalance: false,
    };
  }

  return {
    placeBet,
  };
}
