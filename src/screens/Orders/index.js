import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import OrderItem from "../../components/organisms/Order-item";
import { useSelector, useDispatch } from "react-redux";
import { getOrdersAction, deleteOrderAction } from "../../store/actions/orders.actions";

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);
    console.warn(orders)
    const handleDeleteOrder = (id) => dispatch(deleteOrderAction(id));

    const renderItems = (data) => (
        <OrderItem item={data.item} onDelete={handleDeleteOrder}/>
    )
    
    useEffect(() => {
        dispatch(getOrdersAction());
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={orders}
                    renderItem={renderItems}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default Orders;