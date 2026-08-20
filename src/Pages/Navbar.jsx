import "../Styles/Navbar.css";
import A from "../Assets/Customers.png";
import B from "../Assets/Outsourcing.png";
import C from "../Assets/fluent-mdl2_product-list.png";
import D from "../Assets/Dashboard.png";
import E from "../Assets/tabler_category-filled.png";
import F from "../Assets/mage_tag-check.png";
import G from "../Assets/carbon_purchase.png";
import H from "../Assets/basil_invoice-outline.png";
import I from "../Assets/mdi_file-report-outline.png";
import J from "../Assets/Question.png"; 
import Z from "../Assets/Group 3.png";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Dropdown Component
const Dropdown = ({ title, icon, links, isActive, isOpen, onToggle }) => {
  return (
    <div className="flex flex-col">
      <div
        className="flex items-center space-x-2 p-2 hover:bg-blue-500 rounded-lg cursor-pointer"
        onClick={onToggle}
      >
        <img src={icon} alt={title} className="h-5 w-5" />
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 ml-auto transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="ml-8 flex flex-col space-y-1">
          {links.map((link) => (
            <div
              key={link.path}
              className={`flex items-center p-2 rounded-lg cursor-pointer ${
                isActive(link.path) ? "bg-light text-white" : "hover:bg-blue-500"
              }`}
            >
              <Link to={link.path}>
                <span>{link.label}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div className={`
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 
        transform transition-transform duration-300 ease-in-out
        w-64 md:w-[16%] min-h-full bg-[#5884FF] text-white flex flex-col p-4 space-y-2 fixed left-0 top-0 z-50 overflow-y-auto
      `}>
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-6 justify-center">
        <img src={Z} alt="Logo" className="h-10 w-10" />
        <span className="text-xl font-bold">Nvento</span>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col space-y-4">
        {/* Dashboard */}
        <div
          className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer ${
            isActive("/") ? "bg-light text-white" : "hover:bg-blue-500"
          }`}
        >
          <img src={D} alt="Dashboard" className="h-5 w-5 " />
          <Link to="/">
            <span>Dashboard</span>
          </Link>
        </div>

        {/* Manage Suppliers Dropdown */}
        <Dropdown
          title="Manage Suppliers"
          icon={B}
          links={[
            { path: "/all-suppliers", label: "All Suppliers" },
            { path: "/add-supplier", label: "Add Supplier" },
          ]}
          isActive={isActive} // Pass isActive function
          isOpen={openDropdown === "suppliers"}
          onToggle={() => toggleDropdown("suppliers")}
        />

        {/* Manage Customers Dropdown */}
        <Dropdown
          title="Manage Customers"
          icon={A}
          links={[
            { path: "/all-customers", label: "All Customers" },
            { path: "/add-customer", label: "Add Customer" },
            { path: "/credit-customer", label: "Credit Customers" },
            { path: "/customer-wise-report", label: "Customer Wise Report" },
          ]}
          isActive={isActive} // Pass isActive function
          isOpen={openDropdown === "customers"}
          onToggle={() => toggleDropdown("customers")}
        />

        {/* Manage Units Dropdown */}
        <Dropdown
          title="Manage Units"
          icon={F}
          links={[{ path: "/all-unit", label: "All Units" }]}
          isActive={isActive} // Pass isActive function
          isOpen={openDropdown === "units"}
          onToggle={() => toggleDropdown("units")}
        />

        {/* Manage Categories Dropdown */}
        <Dropdown
          title="Manage Categories"
          icon={E}
          links={[{ path: "/all-category", label: "All Categories" }]}
          isActive={isActive} // Pass isActive function
          isOpen={openDropdown === "categories"}
          onToggle={() => toggleDropdown("categories")}
        />

        {/* Manage Products Dropdown */}
        <Dropdown
          title="Manage Products"
          icon={C}
          links={[
            { path: "/all-product", label: "All Products" },
            { path: "/add-product", label: "Add Product" },
          ]}
          isActive={isActive} // Pass isActive function
          isOpen={openDropdown === "products"}
          onToggle={() => toggleDropdown("products")}
        />

        {/* Manage Purchases Dropdown */}
        <Dropdown
          title="Manage Purchase"
          icon={G}
          links={[
            { path: "/all-purchase", label: "All Purchases" },
            { path: "/add-purchase", label: "Add Purchase" },
            { path: "/purchase-report", label: "Purchase Report" },
          ]}
          isActive={isActive} // Pass isActive function
          isOpen={openDropdown === "purchases"}
          onToggle={() => toggleDropdown("purchases")}
        />

        {/* Manage Invoices Dropdown */}
        <Dropdown
          title="Manage Invoice"
          icon={H}
          links={[
            { path: "/all-invoice", label: "All Invoice" },
            { path: "/add-invoice", label: "Add Invoice" },
            { path: "/print-invoice", label: "Print Invoice" },
          ]}
          isActive={isActive} // Pass isActive function
          isOpen={openDropdown === "invoices"}
          onToggle={() => toggleDropdown("invoices")}
        />

        {/* Manage Stocks Dropdown */}
        <Dropdown
          title="Manage Stock"
          icon={I}
          links={[
            { path: "/all-stock", label: "All Stocks" },
          ]}
          isActive={isActive} // Pass isActive function
          isOpen={openDropdown === "stocks"}
          onToggle={() => toggleDropdown("stocks")}
        />

        {/* Help Section */}
        <div
          className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer ${
            isActive("/help") ? "bg-light text-white" : "hover:bg-blue-500"
          }`}
        >
          <img src={J} alt="Help" className="h-5 w-5" />
          <Link to="/help">
            <span>Help/Support</span>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
