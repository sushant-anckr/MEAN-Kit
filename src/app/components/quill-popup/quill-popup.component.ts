import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import Quill from 'quill';


@Component({
  selector: 'app-quill-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quill-popup.component.html',
  styleUrl: './quill-popup.component.css'
})
export class QuillPopupComponent implements AfterViewChecked {
  @ViewChild("popupEditorContainer") popupEditorContainer: ElementRef | null = null;
  popupEditor: Quill | undefined;

  isPopupOpen = false;

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
    this.popupEditor = undefined; // Reset the popup editor so it can be reinitialized when reopening
  }

  ngAfterViewChecked() {
    if (this.isPopupOpen && this.popupEditorContainer && !this.popupEditor) {
      this.initializeEditor(this.popupEditorContainer);
    }
  }

  private initializeEditor(container: ElementRef | null) {

const icons:any = Quill.import('ui/icons');
icons['undo'] = '<svg viewBox="0 0 18 18">/* SVG for undo */</svg>';
icons['redo'] = '<svg viewBox="0 0 18 18">/* SVG for redo */</svg>';

    if (container) {
      try {
        this.popupEditor = new Quill(container.nativeElement, {
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image", "video"],
              [{ align: [] }],
              [{ color: [] }, { background: [] }],
              ["undo", "redo"],
              ["clean"],
            ],
            handlers: {
              undo: () => {
                this.popupEditor?.history.undo();
              },
              redo: () => {
                this.popupEditor?.history.redo();
              }
            }
          },
          theme: "snow",
        });
      } catch (error) {
        console.error("Error creating Quill editor:", error);
      }
    } else {
      console.error("Element with #popupEditorContainer not found!");
    }
  }
}
