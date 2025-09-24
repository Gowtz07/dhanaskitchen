import React from 'react';
import { ChefHat, ShoppingCart } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

interface AdminSidebarProps {
  activeTab: 'menu' | 'orders';
  setActiveTab: (tab: 'menu' | 'orders') => void;
}

const menuItems = [
  { 
    title: "Menu Management", 
    key: "menu" as const, 
    icon: ChefHat 
  },
  { 
    title: "Order Management", 
    key: "orders" as const, 
    icon: ShoppingCart 
  },
];

export function AdminSidebar({ activeTab, setActiveTab }: AdminSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-60"} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.key}>
                  <SidebarMenuButton 
                    onClick={() => setActiveTab(item.key)}
                    className={activeTab === item.key ? "bg-accent text-accent-foreground" : ""}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {!collapsed && <span>{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}