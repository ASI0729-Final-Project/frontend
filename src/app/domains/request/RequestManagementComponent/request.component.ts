import { Component } from '@angular/core';
import { RequestService } from '../services/request.services';
import { Request, Comment } from '../model/request.model';
import {RequestFiltersComponent} from './RequestFilterComponent/request-filters.component';
import {RequestStatusComponent} from './RequestStatusComponent/request-status.component';
import {RequestGridComponent} from './RequestGridComponent/request-grid.component';
import {CommentsPopupComponent} from './CommentsPopupComponent/comments-popup.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  imports: [
    RequestFiltersComponent,
    RequestStatusComponent,
    RequestGridComponent,
    CommentsPopupComponent,
    NgIf
  ],
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  // Filtros
  selectedType = 'All';
  selectedStatus = 'All';

  // Estados
  loading = true;
  error = false;
  errorMessage = '';
  usingFallbackData = false;
  showCommentsPopup = false;

  // Datos
  requests: Request[] = [];
  comments: Comment[] = [];
  currentRequestId: number | null = null;

  //comentarios
  newComment = '';
  newRating = 0;

  constructor(public requestService: RequestService) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(): void {
    this.loading = true;
    this.error = false;

    this.requestService.getFilteredRequests(
      this.selectedType === 'All' ? '' : this.selectedType,
      this.selectedStatus === 'All' ? '' : this.selectedStatus
    ).subscribe({
      next: (requests) => {
        this.requests = requests;
        this.loading = false;
        this.usingFallbackData = false;
      },
      error: (err) => {
        console.error('Error loading requests:', err);
        this.loading = false;
        this.error = true;
        this.usingFallbackData = true;
        this.errorMessage = this.getErrorMessage(err);
      }
    });
  }

  private getErrorMessage(error: any): string {
    if (error.status === 0) {
      return 'No se pudo conectar al servidor. Verifica tu conexión a internet.';
    } else if (error.status === 404) {
      return 'Endpoint no encontrado. Verifica la configuración de la API.';
    }
    return 'Ocurrió un error al cargar los requests. Por favor intenta nuevamente.';
  }

  toggleCommentsPopup(requestId?: number): void {
    if (requestId) {
      this.currentRequestId = requestId;
      this.loadComments(requestId);
    }
    this.showCommentsPopup = !this.showCommentsPopup;
  }

  loadComments(requestId: number): void {
    this.requestService.getComments(requestId).subscribe({
      next: (comments) => {
        this.comments = comments;
      },
      error: (err) => {
        console.error('Error loading comments:', err);
        this.comments = [];
      }
    });
  }

  addComment(text: string, rating: number): void {
    if (!this.currentRequestId) return;

    const newComment: Omit<Comment, 'id' | 'createdAt'> = {
      requestId: this.currentRequestId,
      text,
      rating,
      author: 'Usuario' // Reemplazar con usuario
    };

    this.requestService.addComment(newComment).subscribe({
      next: (comment) => {
        this.comments.unshift(comment);
        this.newComment = '';
        this.newRating = 0;
      },
      error: (err) => {
        console.error('Error adding comment:', err);
      }
    });
  }

  clearFilters(): void {
    this.selectedType = 'All';
    this.selectedStatus = 'All';
    this.loadRequests();
  }
}
