import { URL_API } from "../../utils/data/database";
import { 
    GET_ORDERS,
    DELETE_ORDER
} from "../types";

export const getOrdersAction = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/orders.json`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const result = await response.json();

            const orders = Object.keys(result).map(key => ({
                ...result[key],
                id: key
            }));
            dispatch(getOrders(orders));
        }catch (error) {
            console.warn(error);
        }
    }
}

export const deleteOrderAction = (id) => {
    return async dispatch => {
        try {
            await fetch(`${URL_API}/orders/${id}.json`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            dispatch(deleteOrder(id));
        }catch (error) {
            console.warn(error);
        }
    }
}

export const getOrders = orders => ({
    type: GET_ORDERS,
    orders
});

export const deleteOrder = orderId => ({
    type: DELETE_ORDER,
    orderId
});