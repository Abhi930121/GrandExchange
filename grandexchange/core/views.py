from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth import logout
from django.shortcuts import render, redirect
from .models import *
from django.utils import timezone
from django.views.decorators.http import require_POST
from django.contrib.auth.decorators import login_required



def home(request):
    feeds = InstaFeed.objects.order_by('-created_at')
    proofs = PaymentProof.objects.order_by('-uploaded_at')

    return render(request, 'index.html', {
        'feeds': feeds,
        'proofs': proofs,
    })


def Football(request):
    return render(request, 'football.html')


def Cricket(request):
    return render(request, 'cricket.html')


def Casino(request):
    return render(request, 'casino.html')


def About(request):
    return render(request, 'about.html')


def Card(request):
    return render(request, 'card.html')


def LoginPage(request):

    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            if user.is_superuser:
                login(request, user)
                return redirect("admindash")
            else:
                messages.error(request, "Only superusers can access this admin panel.")
                return redirect("LoginPage")
        else:
            messages.error(request, "Invalid username or password.")
            return redirect("LoginPage")

    return render(request, 'login.html')


def AdminDash(request):
    insta_count = InstaFeed.objects.count()
    proof_count = PaymentProof.objects.count()
    
    return render(request, 'admindash.html', {
        "insta_count": insta_count,
        "proof_count": proof_count
    })


def AddInstaFeed(request):
    if request.method == "POST":
        caption = request.POST.get("caption")
        image = request.FILES.get("image")

        InstaFeed.objects.create(
            caption=caption,
            image=image,
            created_at=timezone.now()
        )

        return redirect('addinstafeeds')

    feeds = InstaFeed.objects.all().order_by('-id')  # 👉 send feeds to template

    return render(request, "addinstafeeds.html", {"feeds": feeds})


def AddPaymentProof(request):
    proofs = PaymentProof.objects.all().order_by("-id")

    if request.method == "POST":
        image = request.FILES.get("image")
        PaymentProof.objects.create(image=image)
        return redirect("addpaymentproof")

    return render(request, "addpaymentproof.html", {"proofs": proofs})


def DeletePaymentProof(request, id):
    if request.method == "POST":
        proof = get_object_or_404(PaymentProof, id=id)
        proof.delete()
        return redirect("addpaymentproof")
    return HttpResponseNotAllowed(["POST"])







@login_required
@require_POST
def DeleteInstaFeed(request, id):
    feed = get_object_or_404(InstaFeed, id=id)
    feed.image.delete(save=False)  
    feed.delete()
    messages.success(request, "Feed deleted successfully.")
    return redirect("addinstafeeds") 



def LogoutPage(request):
    logout(request)
    return redirect("Home")






    