import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  quantity: string;
  max_quantity?: string;
  spice_level: number;
  ingredients: string;
  category: string;
  image?: string;
  description?: string;
  is_popular: boolean;
  is_limited: boolean;
  is_special: boolean;
}

interface MenuFormData {
  name: string;
  price: string;
  quantity: string;
  max_quantity: string;
  spice_level: string;
  ingredients: string;
  category: string;
  image: string;
  description: string;
  is_popular: boolean;
  is_limited: boolean;
  is_special: boolean;
}

export function MenuManagement() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState<MenuFormData>({
    name: '',
    price: '',
    quantity: '',
    max_quantity: '',
    spice_level: '1',
    ingredients: '',
    category: '',
    image: '',
    description: '',
    is_popular: false,
    is_limited: false,
    is_special: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const sessionToken = localStorage.getItem('admin_session');
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .order('category', { ascending: true });

      if (error) throw error;
      setMenuItems(data || []);
    } catch (error) {
      console.error('Error fetching menu items:', error);
      toast({
        title: "Error",
        description: "Failed to fetch menu items",
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      price: '',
      quantity: '',
      max_quantity: '',
      spice_level: '1',
      ingredients: '',
      category: '',
      image: '',
      description: '',
      is_popular: false,
      is_limited: false,
      is_special: false,
    });
    setEditingItem(null);
    setShowAddForm(false);
  };

  const handleEdit = (item: MenuItem) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      price: item.price.toString(),
      quantity: item.quantity,
      max_quantity: item.max_quantity || '',
      spice_level: item.spice_level.toString(),
      ingredients: item.ingredients,
      category: item.category,
      image: item.image || '',
      description: item.description || '',
      is_popular: item.is_popular,
      is_limited: item.is_limited,
      is_special: item.is_special,
    });
    setShowAddForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const sessionToken = localStorage.getItem('admin_session');
      const menuData = {
        name: formData.name,
        price: parseFloat(formData.price),
        quantity: formData.quantity,
        max_quantity: formData.max_quantity || null,
        spice_level: parseInt(formData.spice_level),
        ingredients: formData.ingredients,
        category: formData.category,
        image: formData.image || null,
        description: formData.description || null,
        is_popular: formData.is_popular,
        is_limited: formData.is_limited,
        is_special: formData.is_special,
      };

      let error;
      if (editingItem) {
        ({ error } = await supabase
          .from('menu_items')
          .update(menuData)
          .eq('id', editingItem.id));
      } else {
        ({ error } = await supabase
          .from('menu_items')
          .insert([menuData]));
      }

      if (error) throw error;

      toast({
        title: "Success",
        description: `Menu item ${editingItem ? 'updated' : 'created'} successfully`,
      });

      resetForm();
      fetchMenuItems();
    } catch (error) {
      console.error('Error saving menu item:', error);
      toast({
        title: "Error",
        description: "Failed to save menu item",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const sessionToken = localStorage.getItem('admin_session');
      const { error } = await supabase
        .from('menu_items')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Menu item deleted successfully",
      });

      fetchMenuItems();
    } catch (error) {
      console.error('Error deleting menu item:', error);
      toast({
        title: "Error",
        description: "Failed to delete menu item",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Menu Management</h2>
          <p className="text-muted-foreground">Manage your restaurant menu items</p>
        </div>
        <Button onClick={() => setShowAddForm(true)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Menu Item
        </Button>
      </div>

      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}</CardTitle>
            <CardDescription>
              {editingItem ? 'Update the menu item details' : 'Fill in the details for the new menu item'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price (₹)</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max_quantity">Max Quantity (optional)</Label>
                  <Input
                    id="max_quantity"
                    value={formData.max_quantity}
                    onChange={(e) => setFormData({...formData, max_quantity: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="spice_level">Spice Level (1-5)</Label>
                  <Input
                    id="spice_level"
                    type="number"
                    min="1"
                    max="5"
                    value={formData.spice_level}
                    onChange={(e) => setFormData({...formData, spice_level: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="ingredients">Ingredients</Label>
                <Textarea
                  id="ingredients"
                  value={formData.ingredients}
                  onChange={(e) => setFormData({...formData, ingredients: e.target.value})}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description (optional)</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image">Image URL (optional)</Label>
                <Input
                  id="image"
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="is_popular"
                    checked={formData.is_popular}
                    onCheckedChange={(checked) => setFormData({...formData, is_popular: checked})}
                  />
                  <Label htmlFor="is_popular">Popular Item</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="is_limited"
                    checked={formData.is_limited}
                    onCheckedChange={(checked) => setFormData({...formData, is_limited: checked})}
                  />
                  <Label htmlFor="is_limited">Limited Item</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="is_special"
                    checked={formData.is_special}
                    onCheckedChange={(checked) => setFormData({...formData, is_special: checked})}
                  />
                  <Label htmlFor="is_special">Today's Special</Label>
                </div>
              </div>

              <div className="flex gap-2">
                <Button type="submit" disabled={isLoading} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  {isLoading ? 'Saving...' : 'Save'}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm} className="flex items-center gap-2">
                  <X className="h-4 w-4" />
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {menuItems.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <div className="flex gap-1">
                      {item.is_popular && <Badge variant="secondary">Popular</Badge>}
                      {item.is_limited && <Badge variant="destructive">Limited</Badge>}
                      {item.is_special && <Badge variant="default">Today's Special</Badge>}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    <strong>Price:</strong> ₹{item.price} | <strong>Category:</strong> {item.category}
                  </p>
                  <p className="text-sm text-muted-foreground mb-1">
                    <strong>Quantity:</strong> {item.quantity} {item.max_quantity && `(Max: ${item.max_quantity})`}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Ingredients:</strong> {item.ingredients}
                  </p>
                  {item.description && (
                    <p className="text-sm">{item.description}</p>
                  )}
                </div>
                <div className="flex gap-2 ml-4">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(item)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Menu Item</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete "{item.name}"? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(item.id)}>
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}