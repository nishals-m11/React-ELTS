export const initialLoanState = {
  repayments: [
    { id: 1, month: "Jan 2025", amount: 10456, status: "Unpaid" },
    { id: 2, month: "Feb 2025", amount: 10456, status: "Unpaid" },
    { id: 3, month: "Mar 2025", amount: 10456, status: "Unpaid" },
  ],
  paymentHistory: [],
};

export function loanReducer(state, action) {
  switch (action.type) {
    case "MAKE_PAYMENT": {
      const updatedRepayments = state.repayments.map((r) =>
        r.id === action.payload.id
          ? { ...r, status: "Paid" }
          : r
      );

      const paidItem = state.repayments.find(
        (r) => r.id === action.payload.id
      );

      return {
        repayments: updatedRepayments,
        paymentHistory: [...state.paymentHistory, paidItem],
      };
    }

    default:
      return state;
  }
}
