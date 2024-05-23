export interface IBookingSlice {
    items: any[];
    serviceItems: any[];
    itemsHistory: any[];
    itemTotal: number;
    serviceItemTotal: number;
    itemHistoryTotal: number;
    itemDiscountTotal: number;
    serviceItemDiscountTotal: number;
    itemHistoryDiscountTotal: number;
    itemTaxTotal: number;
    itemUnitPriceTotal: number;
    serviceItemTaxTotal: number;
    serviceItemUnitPriceTotal: number;
    itemHistoryTaxTotal: number;
    bookingState: any;
    allowSaving: boolean;
    payments: any[];
    remainingPayment: number;
    callBookingItems: boolean;
    callBookingServiceItems: boolean;
    displayRemainingError: boolean;
}
