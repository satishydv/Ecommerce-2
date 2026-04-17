import { CURRENCY_CODE, EXCHANGE_RATE, LOCALE } from "@/constants/currency";
import { twMerge } from "tailwind-merge";

interface Props {
  amount: number | undefined;
  className?: string;
}

const PriceFormatter = ({ amount, className }: Props) => {
  const formattedPrice = new Number((amount || 0) * EXCHANGE_RATE).toLocaleString(
    LOCALE,
    {
      currency: CURRENCY_CODE,
      style: "currency",
      minimumFractionDigits: 2,
    }
  );
  return (
    <span
      className={twMerge("text-sm font-semibold text-darkColor", className)}
    >
      {formattedPrice}
    </span>
  );
};

export default PriceFormatter;
