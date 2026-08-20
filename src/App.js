import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TopNavbar from './Pages/TopNavbar';
import Navbar from './Pages/Navbar';
import Dashboard from './Pages/Dashboard';
import AllSuppliers from './Pages/AllSuppliers';
import AddSupplier from './Components/Suppliers/AddSupplier';
import AllCustomers from './Pages/AllCustomers';
import AddCustomer from './Components/Customers/AddCustomer';
import CreditCustomer from './Pages/CreditCustomer';
import CustomerWiseReport from './Pages/CustomerWiseReport';
import AllUnits from './Pages/AllUnits';
import AllCategories from './Pages/AllCategories';
import AllProducts from './Pages/AllProducts';
import AddProduct from './Components/Products/AddProduct';
import AllPurchase from './Pages/AllPurchase';
import AddPurchase from './Components/Purchases/AddPurchase';
import PurchaseReport from './Pages/PurchaseReport';
import AllInvoice from './Pages/AllInvoice';
import AddInvoice from './Components/Invoices/AddInvoice';
import PrintInvoice from './Pages/PrintInvoice';
import DailyInvoiceReport from './Pages/DailyInvoiceReport';
import AllStock from './Pages/AllStock';
import Login from './Pages/Login';
import Help from './Pages/Help'


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      <Router>
        {/* <TopNavbar/> */}
        <TopNavbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Navbar/>
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="login" element={<Login/>} />
            {/* <Route path="all-suppliers" element={<AllSuppliers />} /> */}
            <Route path="all-suppliers" element={<AllSuppliers searchQuery={searchQuery}/>} />
            <Route path="add-supplier" element={<AddSupplier />} />
            <Route path="all-customers" element={<AllCustomers searchQuery={searchQuery}/>} />
            <Route path="add-customer" element={<AddCustomer />} />
            <Route path="credit-customer" element={<CreditCustomer searchQuery={searchQuery}/>} />
            <Route path="customer-wise-report" element={<CustomerWiseReport searchQuery={searchQuery}/>} />
            {/* <Route path="customer-report" element={<CustomerReport/>} />     */}
            <Route path="all-unit" element={<AllUnits searchQuery={searchQuery}/>} />
            {/* <Route path="add-unit" element={<AddUnit ids={7}/>} /> */}
            <Route path="all-category" element={<AllCategories searchQuery={searchQuery}/>} />
            {/* <Route path="add-category" element={<AddCategory ids={10}/>} /> */}
            <Route path="all-product" element={<AllProducts searchQuery={searchQuery}/>} />
            <Route path="add-product" element={<AddProduct/>} />
            <Route path="all-purchase" element={<AllPurchase searchQuery={searchQuery}/>} />
            <Route path="add-purchase" element={<AddPurchase/>} />
            <Route path="purchase-report" element={<PurchaseReport searchQuery={searchQuery}/>} />
            <Route path="all-invoice" element={<AllInvoice searchQuery={searchQuery}/>} />
            <Route path="add-invoice" element={<AddInvoice/>} />
            <Route path="print-invoice" element={<PrintInvoice searchQuery={searchQuery}/>} />
            <Route path="daily-invoice-report" element={<DailyInvoiceReport/>} />
            <Route path="all-stock" element={<AllStock searchQuery={searchQuery}/>} />    
            <Route path="help" element={<Help/>} />    
            {/* <Route path="invoice-report" element={<InvoiceReport/>} />     */}
        </Routes>
      </Router>
      </>
  );
}

export default App;

// ------------- Figma ---------
// https://www.figma.com/design/sxn5pvw5PM59CHNTwBFjYn/Inventory-Management-Web-%2B-Android?node-id=0-1&t=keUplJRB88dke1HD-0
