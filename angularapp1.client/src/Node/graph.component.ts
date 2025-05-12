import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { Node } from './node.model'; // adjust path if needed

@Component({
  selector: 'app-graph',
  standalone: true,
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements AfterViewInit {
  @ViewChild('graphContainer', { static: false }) graphContainer!: ElementRef;

  nodes: Node[] = [
    { id: 1, x: 100, y: 100, value: 'A' },
    { id: 2, x: 250, y: 100, value: 'B' },
    { id: 3, x: 400, y: 100, value: 'C' } // de aici controlez pozitia nodurilor
  ];

  ngAfterViewInit(): void {
    this.renderGraph();
  }

  renderGraph(): void { // asta trebuie pusa intr-o alta clasa ca sa separ business logic de visual. Ori intr-o utility class ori poate chiar intr-un service class care poate fi injectat si usor de testat.
    const container = d3.select(this.graphContainer.nativeElement);

    // Clear previous SVG content if any
    container.selectAll('*').remove();

    // Append SVG to the container
    const svg = container.append('svg')
      .attr('width', '100%')
      .attr('height', 400);

    this.nodes.forEach(node => {
      svg.append('circle')
        .attr('id', `node-${node.id}`)
        .attr('class', 'node')
        .attr('cx', node.x)
        .attr('cy', node.y)
        .attr('r', 20)
        .style('fill', 'skyblue')
        .style('stroke', 'black')
        .style('stroke-width', 2);

      svg.append('text')
        .attr('id', `textId-${node.id}`)
        .attr('class', 'text')
        .attr('x', node.x)
        .attr('y', node.y + 5)
        .text(node.value)
        .attr('text-anchor', 'middle')
        .style('fill', 'black');
    });
  }

}
