from django.urls import path

from . import views

app_name = 'polls'
urlpatterns = [
  path('', views.IndexView.as_view(), name='index'),
  path('<int:pk>/', views.DetailView.as_view(), name='detail'),
  path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
  path('<int:question_id>/vote/', views.vote, name='vote'),

  path('widgets/', views.widgets, name='widgets'),
  path('widgets_demo/', views.widgets_demo, name="widgets_demo")
]
'''
urlpatterns = [
  #/polls/
  path('', views.index, name='index'),
  #/polls/34
  path('<int:question_id>', views.detail, name='detail'),
  #/polls/34/vote
  path('<int:question_id>/results/', views.results, name='results'),
  #/polls/34/results
  path('<int:question_id>/vote/', views.vote, name='vote')
]
'''
