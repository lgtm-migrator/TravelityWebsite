using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Travelity.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]

    public partial class HomePage : ContentPage
    {
        public HomePage()
        {
            InitializeComponent();
    public partial class ExplorePage : ContentPage
    {
        public ExplorePage()
        {
            InitializeComponent();
            NavigationPage.SetTitleIconImageSource(this, "icon_home.png");
=======
>>>>>>> 488b39c07d7ec124e09b4da67b7e0b80f77b0c93
        }
    }
}