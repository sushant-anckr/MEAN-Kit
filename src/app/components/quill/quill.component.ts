//app.component.ts

import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import Quill from "quill";

@Component({
  selector: 'app-quill',
  standalone: true,
  imports: [],
  templateUrl: './quill.component.html',
  styleUrl: './quill.component.css'
})
export class QuillComponent implements OnInit {
  @ViewChild("editorContainer", { static: true }) editorContainer: ElementRef | null = null;

 editor: Quill | undefined;

 ngOnInit() {
  console.log("ngOnInit called!");

  if (this.editorContainer) {
      try {
          this.editor = new Quill(this.editorContainer.nativeElement, {
              modules: {
                  toolbar: [
                      [{ header: [1, 2, false] }],
                      ["bold", "italic", "underline", "strike","blockquote","code-block"],
                      [{ list: "ordered" }, { list: "bullet" }],
                      ["link", "image", "video"],
                      [{ align: [] }],
                      [{ color: [] }, { background: [] }],
                      ["clean"],
                  ],
              },
              theme: "snow",
          });
      } catch (error) {
          console.error("Error creating Quill editor:", error);
      }
  } else {
      console.error("Element with #editorContainer not found!");
  }
}

getEditorContent() {
  if (this.editor) {
      return this.editor.root.innerHTML;
  }
  return "";
}

}
