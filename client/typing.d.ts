type Navlink = {
    name: string;
    path: string;
    icon: React.ReactNode;
};

type Customer = {
  id: string
  customerName: string
  email: string
  phone: string
  location: string
  revenue: number
  averageOrderValue: number
}

type Order = {
  id: string
  date: Datetime
  customerId: string
  customerName: string
  orderWeight: number
  orderValue: number
  // invoice: File
  status: string
}