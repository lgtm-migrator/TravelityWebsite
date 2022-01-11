using System;
using System.Collections.Generic;
using Travelity_Mobile.ViewModels;
using Travelity_Mobile.Views;
using Xamarin.Forms;

namespace Travelity_Mobile
{
    public partial class AppShell : Xamarin.Forms.Shell
    {
        public AppShell()
        {
            InitializeComponent();
            Routing.RegisterRoute(nameof(ItemDetailPage), typeof(ItemDetailPage));
            Routing.RegisterRoute(nameof(NewItemPage), typeof(NewItemPage));
        }

    }
}
