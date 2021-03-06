import axios from 'axios'
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAILED,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAILED,
  ORDER_PAYMENT_REQUEST,
  ORDER_PAYMENT_SUCCESS,
  ORDER_PAYMENT_FAILED,
  ORDER_SHOW_USER_ORDERS_REQUEST,
  ORDER_SHOW_USER_ORDERS_SUCCESS,
  ORDER_SHOW_USER_ORDERS_FAILED,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAILED,
  ORDER_PACKING_REQUEST,
  ORDER_PACKING_SUCCESS,
  ORDER_PACKING_FAILED,
  ORDER_IN_TRANSIT_REQUEST,
  ORDER_IN_TRANSIT_SUCCESS,
  ORDER_IN_TRANSIT_FAILED,
  ORDER_DELIVERED_REQUEST,
  ORDER_DELIVERED_SUCCESS,
  ORDER_DELIVERED_FAILED,
} from '../constants/orderConstants'

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/orders`, order, config)

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAILED,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/orders/${id}`, config)

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAILED,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const payOrder = (orderId, paymentResult) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_PAYMENT_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/orders/${orderId}/pay`, paymentResult, config)

    dispatch({
      type: ORDER_PAYMENT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_PAYMENT_FAILED,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const packOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_PACKING_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/orders/${order._id}/deliver`, {}, config)

    dispatch({
      type: ORDER_PACKING_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_PACKING_FAILED,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const shipOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_IN_TRANSIT_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/orders/${order._id}/deliver`, {}, config)

    dispatch({
      type: ORDER_IN_TRANSIT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_IN_TRANSIT_FAILED,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DELIVERED_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/orders/${order._id}/deliver`, {}, config)

    dispatch({
      type: ORDER_DELIVERED_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_DELIVERED_FAILED,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const showUserOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_SHOW_USER_ORDERS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/orders/myorders`, config)

    dispatch({
      type: ORDER_SHOW_USER_ORDERS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_SHOW_USER_ORDERS_FAILED,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/orders`, config)

    dispatch({
      type: ORDER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_LIST_FAILED,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
