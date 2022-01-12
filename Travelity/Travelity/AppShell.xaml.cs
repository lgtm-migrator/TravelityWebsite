using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using Travelity.Views;

namespace Travelity
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    // Inheriting Xamarin Forms.shell to disply bottom tabbed page.
    public partial class AppShell : Xamarin.Forms.Shell
    {
        public AppShell()
        {
            InitializeComponent();
            

        }
    }
}