export class Contacts {
    static AUTH_PATH = "api/auth";
    static PRODUCT_PATH = "api/products";
    static CATEGORY_PATH = "api/categories";
    static PAYMENT_PATH = "api/payment";
    static SEARCH_PATH = "api/search";
    static CART_PATH = "api/cart-products";
    static ORDER_PATH = "api/orders";
    static UPLOAD = "api/upload";
    static EVALUATION_PATH = "api/evaluations";
    static REPORT_PATH = "api/reports";
    static NOTIFICATION = "api/notifications";
    static API_CONFIG = {
        AUTH: {
            LOGIN: {
                URL: `${Contacts.AUTH_PATH}/login`,
                METHOD: "POST",
            },
            REGISTER: {
                URL: `${Contacts.AUTH_PATH}/register`,
                METHOD: "POST",
            },
            LOGOUT: {
                URL: `${Contacts.AUTH_PATH}/logout`,
                METHOD: "POST",
            },
            ADMIN_PROTECTED: {
                URL: `${Contacts.AUTH_PATH}/admin-protected`,
                METHOD: "GET",
            },
        },
        PRODUCT: {
            // GET: /products?page=1&sort=...
            GET_ALL: {
                URL: `${Contacts.PRODUCT_PATH}`,
                METHOD: "GET",
                PARAMS: ["page", "sort", "idCategory", "minPrice", "maxPrice"],
            },
            // GET: /products/:id
            GET_DETAIL: (id: string) => ({
                URL: `${Contacts.PRODUCT_PATH}/${id}`,
                METHOD: "GET",
            }),
            // POST: /products (Admin only)
            CREATE: {
                URL: `${Contacts.PRODUCT_PATH}`,
                METHOD: "POST",
            },
            // PUT: /products/:id (Admin only)
            UPDATE: (id: string) => ({
                URL: `${Contacts.PRODUCT_PATH}/${id}`,
                METHOD: "PUT",
            }),
            // PATCH: /products/:id/status (Admin only)
            UPDATE_STATUS: (id: string) => ({
                URL: `${Contacts.PRODUCT_PATH}/${id}/status`,
                METHOD: "PATCH",
            }),
        },
        CATEGORY: {
            // GET: /categories (Lấy danh sách)
            GET_ALL: {
                URL: `${Contacts.CATEGORY_PATH}`,
                METHOD: "GET",
            },
            // GET: /categories/:id (Xem chi tiết 1 loại)
            GET_DETAIL: (id: string) => ({
                URL: `${Contacts.CATEGORY_PATH}/${id}`,
                METHOD: "GET",
            }),

            // --- ADMIN ONLY ---
            // POST: /categories (Tạo mới)
            CREATE: {
                URL: `${Contacts.CATEGORY_PATH}`,
                METHOD: "POST",
            },
            // PUT: /categories/:id (Cập nhật toàn bộ)
            UPDATE: (id: string) => ({
                URL: `${Contacts.CATEGORY_PATH}/${id}`,
                METHOD: "PUT",
            }),
            // DELETE: /categories/:id (Xóa)
            DELETE: (id: string) => ({
                URL: `${Contacts.CATEGORY_PATH}/${id}`,
                METHOD: "DELETE",
            }),
        },
        PAYMENT: {
            CREATE: {
                URL: `${Contacts.PAYMENT_PATH}/creator`,
                METHOD: "POST",
            },
            CHECKUPDATE: (orderId: string) => ({
                URL: `${Contacts.PAYMENT_PATH}/check-update/${orderId}`,
                METHOD: "GET",
            }),
            CHANGE_STATUS: {
                URL: `${Contacts.PAYMENT_PATH}/change`,
                METHOD: "PUT",
                BODY: ["status", "paymentId"],
            },
        },
        SEARCH: {
            SEARCH_PRODUCTS: {
                /*
                 * @query      string   Full-text search (title, description, specs)
                 * @brand      string   Filter by brand
                 * @categoryId string   Filter by category
                 * @specKey    string   Specification key (e.g. Pin, RAM)
                 * @specValue  string   Specification value (e.g. 7000mAh)
                 * @minPrice   number   Variant min price
                 * @maxPrice   number   Variant max price
                 * @page       number   Current page (default: 1)
                 * @size       number   Page size (default: 20)
                 */
                URL: `${Contacts.SEARCH_PATH}/products`,
                METHOD: "GET",
                PARAMS: [
                    "query",
                    "brand",
                    "categoryId",
                    "specKey",
                    "specValue",
                    "minPrice",
                    "maxPrice",
                    "page",
                ],
            },
        },
        CART: {
            BASE: `${Contacts.CART_PATH}`,
        },
        ORDER: {
            BUY_NOW: {
                URL: `${Contacts.ORDER_PATH}/creator`,
                METHOD: "POST",
                BODY: ["listProduct", "sumPrice", "note", "toAddress", "numberPhone", "userName"],
            },
            VISIBLE: {
                URL: `${Contacts.ORDER_PATH}/visible`,
                METHOD: "GET",
            },
            CANCEL_ORDER: {
                URL: `${Contacts.ORDER_PATH}/order-cancel`,
                METHOD: "GET",
            },
            RETURN_ORDER: {
                URL: `${Contacts.ORDER_PATH}/order-return`,
                METHOD: "GET",
            },
            DELIVERY_ORDER: {
                URL: `${Contacts.ORDER_PATH}/order-delivery`,
                METHOD: "GET",
            },
            ALL_ORDER: {
                URL: `${Contacts.ORDER_PATH}/all`,
                METHOD: "GET",
                PARAMS: [
                    "page",
                    "limit",
                    "status",
                    "search", // search = orderId
                ],
            },
            ORDER_PAYMENT_STATUS: {
                URL: `${Contacts.ORDER_PATH}/admin/payment`,
                METHOD: "GET",
                QUERY: ["page", "paymentStatus", "search", "limit"],
            },
            CHANGE_ORDER_STATUS: {
                URL: `${Contacts.ORDER_PATH}/change`,
                METHOD: "PUT",
                BODY: ["orderId, statusOrder"],
            },
        },
        UPLOAD: {
            UPLOAD_SINGLE_IMAGE: {
                URL: `${Contacts.UPLOAD}/image`,
                METHOD: "POST",
                REQ: ["file"],
            },
        },
        EVALUATION: {
            CREATE: {
                URL: (productId: string) => `${Contacts.EVALUATION_PATH}/product/${productId}`,
                METHOD: "POST",
            },
            GET_BY_PRODUCT: {
                URL: (productId: string) => `${Contacts.EVALUATION_PATH}/product/${productId}`,
                METHOD: "GET",
            },
            // Admin only
            UPDATE_STATUS: {
                URL: (evaluationId: string) =>
                    `${Contacts.EVALUATION_PATH}/toggle-status/${evaluationId}`,
                METHOD: "PATCH",
            },
        },
        REPORT_REFUND: {
            CREATE: {
                URL: `${Contacts.REPORT_PATH}/refund`,
                METHOD: "POST",
                BODY: [
                    "orderId",
                    "paymentId",
                    "cusName",
                    "cusMail",
                    "cusPhone",
                    "reason",
                    "amount",
                    "images",
                ],
            },
            GET_REFUND_REPORT_BY_ID: {
                URL: (id: string) => `${Contacts.REPORT_PATH}/refund/${id}`,
                METHOD: "GET",
            },
            GET_REFUND_REPORTS: {
                URL: `${Contacts.REPORT_PATH}/refund`,
                METHOD: "GET",
            },
        },
        NOTI: {
            GET_ALL: {
                URL: `${Contacts.NOTIFICATION}`,
                METHOD: "GET",
                QUERY: ["page"],
            },
            COUNT_UNREAD: {
                URL: `${Contacts.NOTIFICATION}/count-unread`,
                METHOD: "GET",
            },
            SEND: {
                URL: `${Contacts.NOTIFICATION}/send`,
                METHOD: "PUT",
                BODY: ["notificationId"],
            },
        },
    };
    static Status = {
        //evaluation
        Evaluation: {
            HIDE: 1,
            PUBLIC: 9,
            CREATE: 2,
        },
        //order
        Order: {
            ORDERED: 10,
            PROCESSING: 11,
            SHIPPING: 12,
            DELIVERED: 13,
            CANCELLED: 14,
            RETURNED: 15,
        },
        Payment: {
            UNPAID: 20, // Chưa thanh toán
            PENDING: 21, // Banking: đã tạo link, chờ thanh toán
            PROCESSING: 22, // Banking: bank/MoMo đang xử lý
            PAID: 23, // Thanh toán thành công
            FAILED: 24, // Banking: thất bại
            EXPIRED: 25, // Link hết hạn
            REFUNDED: 26, // Hoàn tiền
            CANCELLED: 27, // Hủy thanh toán
        },
        /*
         ** check validate code checkout session
         */
        Payment_transcript: {
            SUCCESS: 0,
            CANCEL: -1,
            CHECK_UPDATE: 1,
        },
        Payment_check_update: {
            SUCCESS: 0,
            CANCEL: -1,
            PROCESS: 1, // COD
        },
    } as const;
    static Rate = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
    } as const;

    static PaymentMethod = {
        COD: "cod",
        // BANK_TRANSFER: "BANK_TRANSFER",
        MOMO: "momo",
        STRIPE: "stripe",
    };

    static Delivery = {
        STANDARD: "STANDARD",
        EXPRESS: "EXPRESS",
        PICKUP: "PICKUP",
    };

    static Sort = {
        PRICE_ASC: "price_asc",
        PRICE_DESC: "price_desc",
    } as const;
}
