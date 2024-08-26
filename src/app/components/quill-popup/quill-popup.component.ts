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
  // toolbarButtons: NodeListOf<Element> | undefined;

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
            toolbar: {
              container:[
                [{ header: [1, 2, false] }],
                [{font:[]}],
                ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image", "video"],
                [{ align: [] }],
                [{ color: [] }, { background: [] }],
                ["clean"],
              ],
            }
          },
          theme: "snow",
        });
        this.addResponsiveBehavior();
      } catch (error) {
        console.error("Error creating Quill editor:", error);
      }
    } else {
      console.error("Element with #popupEditorContainer not found!");
    }
  }

  
private addResponsiveBehavior() {
  const toolbar = this.popupEditor?.getModule('toolbar') as any; // Assert as `any`
  const toolbarContainer = toolbar.container as HTMLElement;
  const toolbarButtons = Array.from(toolbarContainer.querySelectorAll('button')) as HTMLElement[];

  window.addEventListener('resize', () => {
    this.updateToolbarVisibility(toolbarButtons);
  });

  this.updateToolbarVisibility(toolbarButtons); // Initial check
}

private updateToolbarVisibility(toolbarButtons: HTMLElement[]) {
  const breakpoints = [
    { width: 320, hide: ['ql-undo', 'ql-redo'] },
    { width: 400, hide: ['ql-bold', 'ql-list'] },
    { width: 576, hide: ['ql-header', 'ql-underline', 'ql-italic'] },
    { width: 768, hide: ['ql-code-block', 'ql-blockquote', 'ql-strike'] },
    { width: 992, hide: ['ql-video', 'ql-image', 'ql-link'] },
    { width: 1200, hide: ['ql-clean'] }
  ];

  const availableWidth = window.innerWidth;

  toolbarButtons.forEach(button => {
    const buttonClass = button.classList[0]; // Assuming first class is the Quill button class
    const shouldHide = breakpoints.some(bp => availableWidth < bp.width && bp.hide.includes(buttonClass));
    button.style.display = shouldHide ? 'none' : 'inline-block';
  });
}
}
