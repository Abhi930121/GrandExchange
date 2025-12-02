from django.db import models

class InstaFeed(models.Model):
    caption = models.CharField(max_length=255)
    image = models.ImageField(upload_to='instafeeds/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.caption


class PaymentProof(models.Model):
    image = models.ImageField(upload_to="paymentproofs/")
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.id)