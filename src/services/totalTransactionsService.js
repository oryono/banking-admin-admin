import client from "../client";

export function getDepositTransactionsTotals() {
    return client.get('deposits')
}

export function getWithdrawsTransactionsTotals() {
    return client.get('withdraws')
}

export function getTransfersTransactionsTotals() {
    return client.get('transfers')
}