using System.ComponentModel;
using Travelity_Mobile.ViewModels;
using Xamarin.Forms;

namespace Travelity_Mobile.Views
{
    public partial class ItemDetailPage : ContentPage
    {
        public ItemDetailPage()
        {
            InitializeComponent();
            BindingContext = new ItemDetailViewModel();
        }
    }
}